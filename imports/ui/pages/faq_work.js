import React from 'react';

import { Link } from 'react-router';
import { Row, Col, Image } from 'react-bootstrap';

export const FaqWork = () => (
	<div>
		<Row>
			<Col xs={ 12 }>
				<h2>
					Cara Kami Bekerja / <i>How We Work</i>
				</h2>
				<p>
					by <Link to="/about/us">Cindy Riswantyo</Link>
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
				<ul>
					<li>
						Identifikasi Kandidat / <i>Identifying Candidate</i>
						<br/>
						Kami mencari calon mahasiswa-mahasiswi Pendidikan Tinggi di daerah Indonesia Timur dengan bantuan Change Maker di lokasi setempat.
						<br/>
						<i>
							We look for candidates for Higher Education in Eastern Indonesia with the assistance of Change Maker in the local area.
						</i>
					</li>
					<br/>
					<li>
						Verifikasi Kredibilitas / <i>Verifying Credibility</i>
						<br/>
						Setelah kandidat teridentifikasi, verifikasi akan dilakukan untuk memastikan bahwa kandidat memiliki catatan perilaku yang dapat dididik, motivasi yang baik untuk bersekolah dan kemampuan diterima di minimal satu penyelenggara Pendidikan Tinggi.
						<br/>
						<i>
							Once identified, verification will be conducted to ensure that the candidate possesses a teachable behavior, is well motivated to study and has the capability to be admitted in at least one Higher Education institution.
						</i>
					</li>
					<br/>
					<li>
						Mencari Donasi di BagiIlmu.org / <i>Fund Raising at BagiIlmu.org</i>
						<br/>
						Setelah terverifikasi, profil kandidat akan dimuat dalam BagiIlmu.org sebagai calon mahasiswa/mahasiswi yang mencari donasi. Setiap pendonor bebas memilih kandidat mana yang akan dibantu ataupun untuk tidak memilih kandidat tertentu (menyerahkan kepada kami untuk memilih). 100% donasi akan dibayarkan langsung ke institusi di mana kandidat akan bersekolah.
						<br/>
						<i>
							Once verified, the candidate profile will be listed on BagiIlmu.org for fund raising. Each donor is free to choose which candidate to donate for, or not to choose any specific candidate (ie leaving it to us to choose). 100% donation received will be directly paid to the institution where candidates will study.
						</i>
					</li>
					<br/>
					<li>
						Laporan Akuntabilitas / <i>Accountability Report</i>
						<br/>
						Pendidikan adalah investasi jangka panjang. Hasilnya hanya akan terlihat beberapa tahun kemudian. Kami berkomitmen memberikan laporan kemajuan secara berkala yang mengukur dampak dari donasi yang telah diberikan kepada setiap mahasiswa-mahasiswi. Semua informasi mengenai donasi akan selalu kami ungkapkan dalam website ini. Kami akan terus memperbaiki sistem laporan seiring dengan perjalanan misi kami.
						<br/>
						<i>
							Education is a long term investment. The payoff will only show years after. We are committed to deliver a regular progress report measuring the impact of your donation to every student. All donation-related information will also be disclosed at all times on this website. As we progress in our mission, we will continue to refine our reporting system.
						</i>
					</li>
				</ul>
			</Col>
		</Row>
	</div>
);

