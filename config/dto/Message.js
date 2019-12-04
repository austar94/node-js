class Message {
	constructor(result = false, msg = '', data = '', etc = '', url = ''){
		this.result		=	result;
		this.msg		=	msg;
		this.data		=	data;
		this.etc		=	etc;
		this.url		=	url;
	}

	isResult(){
		return this.result;
	}

	setResult(result){
		this.result		=	result;
	}

	getMessage(){
		return this.msg;
	}

	setMessage(msg){
		this.msg		=	msg;
	}

	getData(){
		return this.data;
	}

	setData(data){
		this.data		=	data;
	}

	getEtc(){
		return this.etc;
	}

	setEtc(etc){
		this.etc		=	etc;
	}

	getUrl(){
		return this.url;
	}

	setUrl(url){
		this.url		=	url;
	}
}

module.exports = Message