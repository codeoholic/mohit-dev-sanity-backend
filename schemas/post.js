export default {

	name: "post",
	type: "document",
	title: "Post",
	fields: [

		{

			name: "title",
			type: "string",
			title: "Title",
			description: "title of the post",

		},
		{

			name: "body",
			type: "array",
			title: "Body",
			of: [{type: 'block'}, {type: 'code'}]

		},
		{

			name: "description",
			type: "string",
			title: "Description"

		},
		{

			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
    			source: 'title',
    		}

		},
		{

			name: "image",
			type: "image",
			title: "Image"

		},
		{

			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "categories" } }]

    	},
		{

			name: "publish_time",
			type: "datetime",
			title: "Publish Time"

		},
		{

			name: "meta_image",
			type: "url",
			title: "Meta Image URL",
			description: "url"

		}

	]

}
