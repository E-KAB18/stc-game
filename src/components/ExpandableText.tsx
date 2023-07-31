import { useState } from "react";
import colors from "../config/colors";

interface Props {
	maxLength?: number;
	children: string;
}

const ExpandableText = ({ children, maxLength = 120 }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);
	if (children.length <= maxLength) return <p>{children}</p>;
	const text = isExpanded ? children : children.slice(0, maxLength);
	return (
		<>
			<div>
				<p
					style={{
						fontSize: "1.9vh",
						fontWeight: "400",
						color: "darkslategray",
					}}
				>
					{text}
				</p>
				<button
					style={{
						fontSize: "12px",
						fontWeight: "700",
						color: colors.primaryColor,
						marginTop:"10px"
					}}
					onClick={() => {
						setIsExpanded(!isExpanded);
					}}
				>
					Load {isExpanded ? "less" : "more"}
				</button>
			</div>
		</>
	);
};

export default ExpandableText;
