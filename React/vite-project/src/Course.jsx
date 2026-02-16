const course1 = 'HTML'

function Course(){
    const style = {
        backgroundColor:'green',
        color : 'white'
    }
    return(
        <div className="card" style={style}>
            <img src="" alt="" />
            <h3>{course1}</h3>
            <p>This is HTML</p>
        </div>
    )
}

export default Course