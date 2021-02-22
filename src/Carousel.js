import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        photos: [],
        active: 0
    }

    static getDerivedStateFromProps({media}){
        let photos=["https://placecorgi.com/600/600"]

        if(media.length > 0){
            console.log(media)
            photos = media.map(({large}) => large)
        }

        return {photos}

    }

    handleClickIndex = (event) => {
        this.setState({
            active : +event.target.dataset.index
        })

    }
    render() {
        const {photos, active} = this.state
        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {photos.map((photo, index)=> (
                        // eslint-disable-next-line
                        <img 
                            key={index} 
                            src={photo} 
                            alt="animal thumbnail" 
                            data-index={index} 
                            className={index == active ? "active" : ""}
                            onClick={this.handleClickIndex}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
