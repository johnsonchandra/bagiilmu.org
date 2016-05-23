import React from 'react';

import { Link } from 'react-router';
import { Row, Col, Image } from 'react-bootstrap';

export const FaqHelp = () => (
	<div>
		<Row>
			<Col xs={ 12 }>
				<h2>
					Cara Kamu Membantu / <i>How You Can Help</i>
				</h2>
				<p>
					by <Link to="/faq/about">Cindy Riswantyo</Link>
				</p>
			</Col>
		</Row>
		<Row>
			<Col xs={ 12 }>
				<Image src="/images/900x300.png" alt="" responsive />
			</Col>
		</Row>
		<Row>
			<Col xs={ 12 }>
				Kamu bisa memilih untuk menjadi / <i>You can choose to be</i> :

				<ul>
					<li>
						Donor
						<br/>
						Cukup transfer dana kamu mulai Rp. 100.000 ke rekening kami atau dengan kartu kredit. 100% donasi akan kami salurkan langsung ke institusi di mana kandidat akan bersekolah. BagiIlmu.org tidak mengambil komisi sepeser pun.
						<br/>
						<i>
							As easy as transferring a minimum of Rp. 100,000 to our bank account or by credit card payment. We will distribute the donation 100% and directly to the institution where the students will study. BagiIlmu.org does not collect any commission.
						</i>
					</li>
					<br/>
					<li>
						Change Maker
						<br/>
						Change Maker adalah koresponden BagiIlmu.org di daerah setempat. Perannya adalah mencari calon mahasiswa dan mahasiswi yang memerlukan bantuan dan menghubungkannya dengan BagiIlmu.org. Ayo jadi pembawa perubahan di daerahmu!
						<br/>
						<i>
							Change Maker is a local correspondent of BagiIlmu.org. His/her role is to seek candidate students who need our help and connect them with BagiIlmu.org. Be a change maker in your hometown!
						</i>
					</li>
					<br/>
					<li>
						Mentor
						<br/>
						Apapun latar belakangmu, kamu bisa jadi mentor. Bagikan pengetahuan, keahlian, motivasi dan inspirasi kamu di Blog BagiIlmu. org. Setiap cerita punya arti.
						<br/>
						<i>
							Whatever your background is, you can be a mentor. Share your knowledge, skills, motivations and inspirations in BagiIlmu.org Blog. Every story has a meaning.
						</i>
					</li>
					<br/>
					<li>
						Peyelenggara Pendidikan Tinggi (Universitas, Akademi and Institut) / <i>Higher Education Instutitions (Universities, Academies and Institutes)</i>
						<br/>
						Kami mengajak universitas, akademi dan institut untuk bekerja sama dalam memfasilitasi proses penerimaan mahasiswa-mahasiswi penerima donor di institusi mereka.
						<br/>
						<i>
							We invite universities, academies and institutes to work together with us in facilitating the admission process of the recipients of donors.
						</i>
					</li>
				</ul>
			</Col>
		</Row>

		<Row>
			<Col xs={ 12 }>
				<b>
					“Perubahan terjadi karena komitmen, bukan karena kekuasaan atau kekayaan”
					<br/>
					<i>
						“Change is a product of commitment, not power nor wealth”
					</i>
				</b>
			</Col>
		</Row>

	</div>
);

