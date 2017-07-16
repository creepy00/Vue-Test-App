<template>
	<div class="apitest">
		<h1>Api test that queries wikipedia</h1>
		<router-link to="/">Home</router-link>

		<h2>Wikipedia top 10 search results:</h2>
		<input v-model="apiSearch" />
		<span v-if="loading">Loading wiki search...</span>
		<ul v-if="wikiSearchResults.length">
			<li v-for="(search, index) in wikiSearchResults">
				{{index+1}}. {{search}}
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	import _ from 'lodash';
	export default {
		name: "apitest",
		data: function() {
			return {
				apiSearch: "",
				loading: false,
				wikiSearchResults: []
			};
		},
		watch: {
			apiSearch: _.debounce(function() {
				const self = this;
				if (self.apiSearch) {
					self.loading = true;
					self.wikiSearchResults = [];
					axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${self.apiSearch}&format=json&origin=*`)
						.then(function({ data }) {
							self.loading = false;
							self.wikiSearchResults = data.query.search.map(function(item) {
								return item.title;
							});
						}).catch(function (err) {
							self.wikiHtml = err.message;
						});
				}

			}, 500)
		}
	}
</script>