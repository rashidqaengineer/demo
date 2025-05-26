import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 17, Issue-1, April 2009"
                pageRange=" 1-35"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090171001">
                            Analysis of seven-year second trimester genetik amniocentesis results of our clinic
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-7</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Oluş Api, Ayşe Gül Özyapı, Birol Cengizoğlu, Orhan Ünal, Mehmet Cem Turan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (1)</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090171002">
                           Multicentric multiple pregnancy study II: perinatal mortality in twins
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">8-17</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Murat Yayla, Yeşim Baytur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (1)</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090171003">
                             The role of maternal serum leptin and malondialdehyde levels in screening and diagnosis of gestational diabetes mellitus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">18-27</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mahmut Öncül, Seyfettin Uludağ, Cihat Şen, Abdullah Göymen, Hafize Uzun, Onur Güralp, Veysel Şal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (1)</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090171004">
                             The etiologic and demographic factors related to anemia prevalence in the pregnant women admitting to an education and research hospital in Istanbul
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">28-34</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Oluş Api, Fulya Bayer, Aybala Akıl, Murat Bektaş, Murat Api, Reşat Dabak, Orhan Ünal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (1)</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090171005">
                            Practical guideline for labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">35-58</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Turkish Perinatology Society
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (1)</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
