
import { Col, Row } from 'react-bootstrap'

import Image from "react-bootstrap/Image";

export default function Advertisement ({orderProp}) {
	//before using props, destructure the object

	

	return (
	
		<Row className="text-center mx-auto justify-content-center mt-5 banner ads">

		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto justify-content-center m-2 p-2 d-none d-md-block">
		<p>This is an advertisement</p>
		<Image src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/273609278_149309417495223_4986034626632138832_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=e3f864&_nc_eui2=AeHzb7wRKNKFJSg1uSPqMV5t12K45rv1VKDXYrjmu_VUoD3s9Tly3kSyV-daYOl6fPrCVHIXxTLN8knHW-DkL1Pl&_nc_ohc=9xxocRDkXi8AX-4cctS&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT8e-u4EupXOtujV5ZiZw6wb72IfmOlKcSdPdidJaaN0og&oe=627CCAE5" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>
		
		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto justify-content-center m-2 p-2">
		<p>This is an advertisement</p>
		<Image src="https://jobayan3.s3-ap-southeast-1.amazonaws.com/upload/99e6602933fd3c250cecea2a758a868d1.png" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>

		<Col xs={12} md={6} lg={4} className="text-center mx-auto justify-content-center m-2 p-2 d-md-none d-lg-block d-block">
		<p>This is an advertisement</p>
		<Image src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/274007993_148779114251500_5886379281585641582_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=101&ccb=1-6&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_eui2=AeG3MQf_YJcmG4-lGYVXSQGG0LfXt_QzLgLQt9e39DMuArxVfro9LyPND5rDA20MO_S37uYOmLT2epGtOwTGZuUx&_nc_ohc=J_imu7Nr9DUAX-5n35U&_nc_ht=scontent.fmnl17-1.fna&oh=00_AT8ukpYPzjA6RyWUiEdIQ5-coat3KC10mWCP9_j64fzw7A&oe=627D4988" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>	
		</Row>	

		)
}