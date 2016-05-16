import React from 'react';
import { browserHistory } from 'react-router';
import { goSignup } from '../../modules/utils.js';

import { Row, Col, Well, Jumbotron, Carousel, Button } from 'react-bootstrap';


export const Index = () => (
	<div>
		<Row>
			<Col xs={ 12 }>
				<Carousel>
					<Carousel.Item>
						<img width={1900} height={1080} alt="headline1" src="/images/1900x1080_SlideOne.png" />
						<Carousel.Caption>
							<h3>bagiilmu.org</h3>
							<p>Higher Education Crowdfunding for Eastern Indonesia</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={1900} height={1080} alt="headline2" src="/images/1900x1080_SlideTwo.png"/>
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Crowdfunding Pendidikan Tinggi Untuk Indonesia Timur.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={1900} height={1080} alt="headline3" src="/images/1900x1080_SlideThree.png"/>
						<Carousel.Caption>
							<h3>Memperluas Akses Kepada Pendidikan Tinggi</h3>
							<p>Widening Access to Higher Education</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Col>
		</Row>
		<Row>
			<Col xs={ 12 }>
				<h4 className="page-header">Apa itu Pendidikan Tinggi? / What is Higher Education?</h4>
				<p>
					Pendidikan Tinggi diselenggarakan di universitas, akademi dan institut, yang memberikan gelar akademik atau sertifikat profesional kepada mahasiswa dan mahasiswinya.
				</p>
				<p>
					<i>
						Higher Education is delivered at universities, academies and institutes, awarding academic degrees or professional certificates to students.
					</i>
				</p>
			</Col>
		</Row>
		<Row>
			<Col xs={ 12 }>
				<h4 className="page-header">Kenapa Pendidikan Tinggi? / Why Higher Education?</h4>
				<p>
					Pendidikan Tinggi bertujuan mempersiapkan mahasiswa dan mahasiswi menjadi sumber daya manusia yang lebih terampil dan profesional sehingga mereka mampu memperoleh pekerjaan yang lebih baik dan berpenghasilan lebih baik pula. Kami melihat Pendidikan Tinggi sebagai game changer yang dapat meningkatkan kualitas kehidupan seseorang.
				</p>
				<p>
					Di Indonesia, tingkat partisipasi Pendidikan Tinggi pada tahun [X] berada pada kisaran [X%], berdasarkan data dari [X].
				</p>
				<p>
					<i>
						The objective of Higher Education is to prepare students to become more skilled and professional human capital and thus enabling them to have better jobs and earn better salaries. We see Higher Education as a game changer to improve the quality of one’s life.
					</i>
				</p>
				<p>
					<i>
						In Indonesia, participation rate of Higher Education as of [X] is [X], according to [X].
					</i>
				</p>
			</Col>
		</Row>

		<Row>
			<Col xs={ 12 }>
				<hr/>
				<Well>
					<Row>
						<Col md={ 8 }>
							<p>Bergabunglah!</p>
						</Col>
						<Col md={ 4 }>
							<Button bsStyle="default" className="btn-block" onClick={ goSignup }>Signup</Button>
						</Col>
					</Row>
				</Well>
			</Col>
		</Row>
	</div>
);



		// <Jumbotron className="text-center">
		// 	<h1 >bagiilmu.org</h1>
		// 	<p>
		// 		Crowdfunding Pendidikan Tinggi Untuk Indonesia Timur/ Higher Education Crowdfunding for Eastern Indonesia
		// 	</p>
		// 	<p><a className="btn btn-success" href="/blog/1" role="button">Read the Blog</a></p>
		// 	<p style={ { fontSize: '16px', color: '#aaa' } }>Currently at Alpha.20160514</p>
		// </Jumbotron>
