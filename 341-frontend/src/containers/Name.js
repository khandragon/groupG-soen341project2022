function Name(props){
    document.getElementById("practice").value = props;
    return(
        <Row style={{display: 'block',
        width: 700, padding: 50, 
            backgroundColor: 'blue',
          }}>
            <input type="hidden" name="practice" id="practice"/>
          </Row>
    )
}