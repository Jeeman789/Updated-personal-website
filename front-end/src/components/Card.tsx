import './comp_css/Card.css'

type CardProps = {
    image: string;
    text: string;
};

const Card = (props: CardProps) => {
    return(
        <div className='card-container'>
            <div className='card-background'>
                <div className='triangle'></div>
                <div className='rectangle'></div>
            </div>
            <div className='card-foreground'>
                <div className='card-image'>
                    <img src={props.image}></img>
                </div>
                <div className='card-entry'>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card