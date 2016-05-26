import React from 'react';

import { Link } from 'react-router';
import { Row, Col, Image } from 'react-bootstrap';

export const FaqAboutPage = () => (
	<div>
		<Row>
			<Col md={ 6 }>
				<Image src="/images/750x450.png" alt="" responsive />
			</Col>
			<Col md={ 6 }>
				<h2>
					Tentang BagiIlmu.org
					<br/>
					<i>About BagiIlmu.org</i>
				</h2>
				<p>
					Kami disatukan oleh kesamaan pandangan / <i>We are united by a common view</i>: <b>#StrengthIsForService</b>
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.
				</p>	
			</Col>
		</Row>

		<hr/>
		
		<Row>
			<Col md={ 6 }>
				<Image src="/images/750x450.png" alt="" responsive />
				<h3>
					Cindy Riswantyo<br/>
					<small>Operation</small>
				</h3>
				<p>
					[ cindy.riswantyo@bagiilmu.org ]
				</p>
				<hr/>
			</Col>
			<Col md={ 6 }>
				<Image src="/images/750x450.png" alt="" responsive />
				<h3>
					Lidya Clementina<br/>
					<small>Marketing</small>
				</h3>
				<p>
					[ lidya.clementina@bagiilmu.org ]
				</p>
				<hr/>
			</Col>
			<Col md={ 6 }>
				<Image src="/images/750x450.png" alt="" responsive />
				<h3>
					Alyssa Prabandari<br/>
					<small>Operation</small>
				</h3>
				<p>
					[ alyssa.prabandari@bagiilmu.org ]
				</p>
				<hr/>
			</Col>
			<Col md={ 6 }>
				<Image src="/images/750x450.png" alt="" responsive />
				<h3>
					Johnson Chandra<br/>
					<small>IT</small>
				</h3>
				<p>
					[ johnson.chandra@bagiilmu.org ]
				</p>
				<hr/>
			</Col>
			
		</Row>

	</div>
);
