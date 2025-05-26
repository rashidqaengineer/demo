import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 16, Issue-3, December 2008"
                pageRange=" 75-104"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080163001">
                           To evaluate the role of lipid profile in the etiopathogenesis of mild and severe preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">75-81</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Özgür Özdemir, Ayhan Coşkun, Deniz Cemgil Arıkan, Gürkan Kıran, Melih Atahan Güven, Metin Kılınç
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (3)</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080163002">
                            Misoprostol efficacy in second and third trimester pregnancy terminations
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">82-91</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Yıldız Uyar, Sultan Buğday, Serçin Ordu, Yeşim Baytur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (3)</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080163003">
                            Comparison of maternal serum adiponectin and leptin measurements in screening and diagnosis of gestational diabetes mellitus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">92-99</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Abdullah Göymen, Mahmut Öncül, Onur Güralp, Cihat Şen, Seyfettin Uludağ, Derya Kanza Gül, Özgür Gelen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (3)</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080163004">
                            Does Ramadan cause to iron deficiency in pregnancy?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">100-103</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ebru Dikensoy, Özcan Balat, Fatma Bahar Cebesoy, Ayhan Özkur, Hülya Çiçek, Günay Can
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (3)</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080163005">
                            Sotalol treatment in a case with fetal atrial flutter
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">104-108</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ebru Dikensoy, Osman Başpınar, Özcan Balat
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (3)</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
