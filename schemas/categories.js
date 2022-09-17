export default {

	name: "categories",
	type: "document",
	title: "Categories",
	fields: [

		{

			name: "title",
			type: "string",
			title: "Title",
			description: "title of the category",

		},
		{

			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
    			source: 'title',
    		}

		}

	]

}