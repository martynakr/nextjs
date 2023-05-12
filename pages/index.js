import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    console.log(allPostsData);
    return (
        <Layout home>
            <Head>
                <title>Blog app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Link href="/posts/first-post">Posts</Link>
                <Image
                    src="/images/img.png"
                    width={600}
                    height={400}
                    alt="image"
                />
                <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </Layout>
    );
}
