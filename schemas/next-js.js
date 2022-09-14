export default {

	name: "next-js",
	type: "document",
	title: "NextJS",
	fields: [

		{

			name: "title",
			type: "string",
			title: "Title",
			description: "title of the post",

		},
		{

			name: "title_hindi",
			type: "string",
			title: "Title Hindi",
			description: "title of the post",

		},
		{

			name: "body",
			type: "array",
			title: "Body",
			of: [{type: 'block'}]

		},
        {

			name: "body_hindi",
			type: "array",
			title: "Body Hindi",
			of: [{type: 'block'}]

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

			name: "tags",
			type: "string",
			title: "Tags"

		},
		{

			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "categories" } }],
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

		},
		{

			name: "next_link_title",
			type: "string",
			title: "Next Link Title"

		},
		{

			name: "next_link_url",
			type: "string",
			title: "Next Link URL"

		},
		{

			name: "previous_link_title",
			type: "string",
			title: "Previous Link Title"

		},
		{

			name: "previous_link_url",
			type: "string",
			title: "Previous Link URL"

		}

	]

}
