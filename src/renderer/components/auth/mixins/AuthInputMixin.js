export default {
	props: {
		errors: {
			type: Array,
			default(){ return [] }
		}
	},
	data(){
		return {
			value: null
		}
	},
	computed: {
		validationError(){	
			return !!this.errors.filter(e => e.value == this.value).length;
		}
	},
	methods: {
		updateValue(val){
			this.$emit('input', val.trim());
		}
	}
};