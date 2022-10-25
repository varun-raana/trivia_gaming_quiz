import React from "react";

function Question({ values }) {
	return (
		<div className="mb-10">
			<small className="text-gray-500 inline-block border-b w-full mb-2">
				Answer the following <b className="text-black">question ?</b>
			</small>
			<p className="text-lg font-bold text-gray-800 md:max-w-2xl">
				{values.question}
			</p>
		</div>
	);
}

export default Question;
