import '../assets/styles/footer.styl'
export default{
    data(){
        return{
            author:'wangyang'
        }
    },

    render(){
        return(
            <div id= "footer">
                <span>Weitten by {this.author}</span>
            </div>
        )
    }
}