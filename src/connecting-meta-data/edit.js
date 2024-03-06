import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useEntityProp } from "@wordpress/core-data";
import { useDispatch, useSelect } from "@wordpress/data";
import { store as editorStore } from "@wordpress/editor";

import "./editor.scss";
import { useEffect } from "@wordpress/element";

export default function Edit() {
	const postType = useSelect(
		(select) => select(editorStore).getCurrentPostType(),
		[],
	);

	const { editPost } = useDispatch(editorStore);

	const [meta, setMeta] = useEntityProp("postType", postType, "meta");
	const { first_name, last_name } = meta;

	useEffect(() => {
		editPost({ title: `${first_name} ${last_name}` });
	}, [first_name, last_name]);

	return (
		<p {...useBlockProps()}>
			<RichText
				tagName="h2"
				value={first_name}
				onChange={(new_first_name) => {
					setMeta({
						...meta,
						first_name: new_first_name,
					});
				}}
				placeholder={__("First Name", "connecting-meta-data")}
				disableLineBreaks={true}
				/>
			<RichText
				tagName="h2"
				value={last_name}
				onChange={(new_last_name) => {
					setMeta({
						...meta,
						last_name: new_last_name,
					});
				}}
				placeholder={__("Last Name", "connecting-meta-data")}
				disableLineBreaks={true}
			/>
		</p>
	);
}
