// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

import categories from "./categories"
import gist from "./gist"
import post from "./post"
import nextJS from "./next-js"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({

	name: "default",
	types: schemaTypes.concat([

		categories,
		gist,
		nextJS,
		post,

	]),

})
