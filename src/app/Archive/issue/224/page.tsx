import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 17, Issue-3, December 2009"
                pageRange="97-130"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090173001">
                           Single fetal death in twin pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">97-99</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mahmut Erdemoğlu, Ahmet Kale, Ali İrfan Güzel, Umur Kuyumcuoğlu, Nurten Akdeniz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (3)</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090173002">
                           The fetal nose bone nomogram according to gestational weeks
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">100-103</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ahmet Yalınkaya, Ali İrfan Güzel, Ersin Uysal, Kadir Kangal, Zozan Kaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (3)</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090173003">
                            Identifying the women`s choice of delivery methods of and the factors that affect them
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">104-112</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Fatma Deniz Sayıner, Nebahat Özerdoğan, Sevgi Giray, Emine Özdemir, Ayşegül Savcı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (3)</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090173004">
                             Method of delivery in multiparous twin pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">113-120</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Nida Ergin, Murat Yayla, Hüsnü Görgen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (3)</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090173005">
                             Early diagnosed Meckel-Gruber syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">121-125</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hakan Kanıt, Onur Umut Yücel, Kıvanç Kayhan, Çiğdem İspahi, Duygu Ayaz, Filiz Bal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (3)</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090173006">
                             Triple autosomal trisomy detected in a spontaneous abortion material
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">126-129</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Elif Pala, Mehmet Erdem, Ahmet Erdem, Meral Yirmibeş Karaoğuz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (3)</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090173007">
                            Erratum: Using intracardiac hyperechogenic focus as the identifier of Down syndrome in Turkish population
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">130-130</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                    Fehmi Yazıcıoğlu, O. Nuri Özyurt, Özlem Dülger, Atilla Çankaya, Mehmet Aygün, Reyhan Demirtaş
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Erratum</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (3)</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
