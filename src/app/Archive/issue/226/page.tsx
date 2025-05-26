import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 18, Issue-2, August 2010"
                pageRange="35-64"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100182001">
                               Evaluation of the results of cordocentesis: 9-years experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">35-42</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Turgay Şener, H. Mete Tanır, Emel Özalp, Emre Uysal, Beyhan Durak, Oguz Çilingir, Güney Bademci, Sevilhan Artan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100182002">
                              Adnexal masses in pregnancy: a series of 12 patients
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">43-49</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Miğraci Tosun, Mehmet Sakıncı, Handan Çelik, Yıldırım Durak, Devran Bıldırcın, Hasan Çakıroğlu, Erdal Malatyalıoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100182003">
                                An anaplastic astrocytoma which is diagnosed in pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">50-54</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Yasemin Taşcı, Şadıman Altınbaş, Ömer Kandemir, Serdar Yalvaç
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100182004">
                              Periodontological disease of pregnancy: pregnant tumor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">55-58</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Serkan Bodur, Erkan Özcan, İsmet Gün
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100182005">
                              Meckel-Gruber syndrome: a report of three cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">59-63</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Sibel Hakverdi, İsmail Güzelmansur, Hamide Sayar, Arif Güngören, Ali Ulvi Hakverdi, Serhat Topraklı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100182006">
                             Cornelia de Lange syndrome: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">64-68</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Orkun Çetin, Seyfettin Uludağ, Begüm Aydoğan, Cihat Şen, İpek Çetin, Sezin Uludağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 12, 2014 </span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
