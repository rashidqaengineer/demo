import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 31, Congress Supplement (Perinatal Medicine-2023), October 2023"
                pageRange="01-28"
                description="Perinatal Journal is an international, online open access, peer-reviewed scientific journal (e-ISSN: 1305-3124). The journal is the official publication of Perinatal Medicine Foundation. It is published three times a year in April, August and December. The publication language of the journal is English."
                imageUrl="/images/perinatal-journal-small-en-US.jpg"
            />

            <h1 className="issue-table-of-contents bg-[#efefef] text-[#3d3d3d] text-[14pt] py-3 px-3 font-bold mt-2">
                Table of Contents
            </h1>

            <ul className="issue-article-list">
                {/* Article 1 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp001">
                           OP-01 Primary microcephaly cases with molecular genetic basis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">01</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ümit Taşdemir, Oya Demirci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp001</span>
                    </div>
                </li>

                {/* Article 2 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp002">
                           OP-02 Serum prolactin levels in women with threatened miscarriage a prospective case-control study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">01</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Emine Zeynep Yılmaz, Gökhan Tulunay
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp003">
                           OP-03 Osteogenesis Imperfecta Type 3 with COL1A1 mutation Prenatal diagnosis and management
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">01-02</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mirac Ozalp, Cagdas Nurettin Emeklioglu, Guldem Durak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp004">
                          OP-04 A study of fetal sacrococcygeal teratoma cases perinatal and postnatal evaluation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">03</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Tuğçe Arslanoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp004</span>
                    </div>
                </li>
                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp005">
                           OP-05 Prenatal diagnosis of left ventricle aneurysm
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">03-04</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Zafer Bütün, Gökalp Şenol
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp005</span>
                    </div>
                </li>
                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp006">
                           OP-06 Umbilical cord torsion
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">04-05</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sibel Mutlu, Koray Özbay
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp007">
                           OP-07 Prenatal diagnosis of Pfeiffer Syndrome case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">05</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Aydın Öcal, Sinem Tekin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp007</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp008">
                          OP-08 The effect of maternal metabolic factors and lipid profile on birth weight in pregnants with gestational diabetes and normal glucose tolerance
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">05-06</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Lutfiye Uygur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp008</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp009">
                           OP-09 Treatment modalities in twin reversed arterial perfusion
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">06-07</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Şükran Doğru, Ali Acar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp009</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp010">
                           OP-10 Selective fetal reduction with intrafetal laser in twin-twin transfusion syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">07-08</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Fatih Akkuş, Ali Acar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp010</span>
                    </div>
                </li>
                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp011">
                          OP-11 Prenatal diagnosis of a fetus with 45,X47,XYY mosaicism
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">08-09</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nebahat Uzunay, Doruk Cevdi Katlan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp012">
                           OP-12 Comparative case reports of prenatally diagnosed left ventricular aneurysm and diverticulum
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">09</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ömer Gökhan Eyisoy, Oya Demirci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp012</span>
                    </div>
                </li>
               {/* Article 13 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp013">
                           OP-13 A rare lesion detected on the fetal face in the 3rd trimester dacryocyctocele
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">09-10</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Raziye Torun, Alkım Gülşah Şahingöz Yıldırım, Atalay Ekin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp013</span>
                    </div>
                </li>
                {/* Article 14 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp014">
                          OP-14 Fetal right ventricular diverticulum a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">10</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ahmet Güllüoğlu, Alparslan Deniz, Emre Köle, Eray Çalışkan, İlaha Hasanova
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp014</span>
                    </div>
                </li>
                {/* Article 15 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp015">
                           OP-15 Case report pulmoner embolism during pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">10-11</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ahmet Güllüoğlu, Merve Çakır Köle, Merve Erol Deniz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp015</span>
                    </div>
                </li>
                {/* Article 16 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp016">
                           PP-01 Phrygian cap of gallbladder a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">11-12</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cagdas Nurettin Emeklioglu, Mirac Ozalp
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp016</span>
                    </div>
                </li>
                {/* Article 17 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp017">
                          PP-02 Prenatal diagnosis of isolated redundant foramen ovale
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">12</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gökalp Şenol
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp017</span>
                    </div>
                </li>
                {/* Article 18 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp018">
                          PP-03 Prenatal diagnosis of ductus arteriosus aneurysm
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">12-13</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gökalp Şenol
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp018</span>
                    </div>
                </li>
                {/* Article 19 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp019">
                           PP-04 Pheochromocytoma in pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">13</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Masum Kayapınar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp019</span>
                    </div>
                </li>
                {/* Article 20 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp020">
                           PP-05 Prenatal diagnosis of S-shaped ductus arteriosus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">13</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Zafer Bütün
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp020</span>
                    </div>
                </li>
                 {/* Article 21 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp021">
                           PP-06 Unicornuate uterus accompanied by unilateral tubal-agenesis in pregnancy a case presentation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">14</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Serem Kel, Nur Kuşcu, Süreyya Demir, Abdülbaki Şahan, Emine İrem Süha, Mehmet Nuri Duran, Bülent Demir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp021</span>
                    </div>
                </li>
                 {/* Article 22 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp022">
                           PP-07 TAR Syndrome case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">14-15</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nur Kuşcu, Serem Kel, Süreyya Demir, Müge Üstkaya Sungur, Menekşe Öztürk, Mehmet Nuri Duran, Bülent Demir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp022</span>
                    </div>
                </li>
                 {/* Article 23 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp023">
                           PP-08 Meckel Gruber Syndrome a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">15</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Serem Kel, Süreyya Demir, Mehmet Nuri Duran, Bülent Demir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp023</span>
                    </div>
                </li>
                 {/* Article 24 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp024">
                           PP-09 Alobar holoprosencephaly with cebocephaly a rare case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">16-17</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ozge Aslan, Cagdas Nurettin Emeklioglu, Mirac Ozalp
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp024</span>
                    </div>
                </li>
                 {/* Article 25 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp025">
                           PP-10 Phenotypic manifestations of copy number variation in chromosome 11p11.2-p11.12
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">17-18</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cagdas Nurettin Emeklioglu, Elif Akkoc Demirel, Mirac Ozalp
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp025</span>
                    </div>
                </li>
                {/* Article 26 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp026">
                           PP-11 Prenatal diagnosis of a placental cyst with intracystic hemorrhage case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">18</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ceylin Elbistanlı, Melda Kuyucu, Mehmet Serdar Kütük
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp026</span>
                    </div>
                </li>
                {/* Article 27 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp027">
                           PP-12 Fetal Patent Uracus Coexistence of recurrent megacystis, umbilical cord cyst and impaired kidney functions
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">19-20</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cagdas Nurettin Emeklioglu, Mirac Ozalp
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp027</span>
                    </div>
                </li>
                {/* Article 28 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp028">
                           PP-13 Partial corpus callosum agenesis a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">20-21</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Tuvana Turkay Tudes, Cagdas Nurettin Emeklioglu, Mirac Ozalp
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp028</span>
                    </div>
                </li>
                {/* Article 29 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp029">
                           PP-14 Case report of a rare form of neural tube defect iniencephaly with diaphragmatic hernia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">21-22</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cagdas Nurettin Emeklioglu, Guldem Durak, Mirac Ozalp
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp029</span>
                    </div>
                </li>
                {/* Article 30 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp030">
                           PP-15 Case report of ısolated cardiac rhabdomyoma
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">23-24</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cagdas Nurettin Emeklioglu, Enes Halk, Mirac Ozalp
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp030</span>
                    </div>
                </li>
                {/* Article 31 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp031">
                           PP-16 The importance of early diagnosis in maternal syphilis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">24</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sevim Tuncer Can, Atalay Ekin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp031</span>
                    </div>
                </li>
                {/* Article 32 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp032">
                           PP-17 A case of Meckel-Gruber syndrome diagnosed in the first trimester
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">24-25</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Büsra Berfin Polat, Rauf Melekoglu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp032</span>
                    </div>
                </li>
                {/* Article 33 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp033">
                           PP-18 Prenatal sonographic diagnosis of VACTERL syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">25-26</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Büsra Berfin Polat, Rauf Melekoglu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp033</span>
                    </div>
                </li>
                {/* Article 34 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp034">
                           PP-19 Prenatal diagnosis of isolated bilateral congenital cataract
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">26-27</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Büsra Berfin Polat, Rauf Melekoglu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp034</span>
                    </div>
                </li>
                {/* Article 35 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp035">
                           PP-20 Prenatal sonographic diagnosis of Ebstein anomaly
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">27-28</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Büsra Berfin Polat, Rauf Melekoglu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp035</span>
                    </div>
                </li>
                {/* Article 36 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2023031supp036">
                           PP-21 Noonan syndrome presented with cystic hygroma in the first trimester
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">28</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ceren Sağlam, Sevim Tuncer Can, Raziye Torun, Zübeyde Emiralioğlu Çakır, Barış Sever, Atalay Ekin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.031supp036</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
