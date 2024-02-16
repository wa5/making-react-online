import { Carousel } from "react-bootstrap"
import img1 from '../../static/image/3.jpg'
import img2 from '../../static/image/2.jpg'
import img3 from '../../static/image/4.jpg'

export const MySlider:React.FC<{}>=()=>{
    return <>
     <Carousel>
      <Carousel.Item>
<img width="100%" height="400px" src={img1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%"  height="400px"  src={img2} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%"   height="400px"  src={img3} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
}