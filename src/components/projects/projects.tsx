import {Key, use} from 'react';
import styles from '@/components/projects/projects.module.css';
import Link from "next/link";

export async function fetchProjects() {

    const res = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NOTION_API_KEY}`
        },
    })

    return await res.json()
}

export default function Projects() {
    const data = use(fetchProjects());

    return (
        <div id='projects' className={styles.container}>
            <div className={styles.content}>
                {data.results.map((project: {
                    id: Key | null | undefined;
                    cover: { file: { url: string; }; };
                    properties: {
                        Name: {
                            title: {
                                plain_text: string;
                            }[];
                        };
                        Description: {
                            rich_text: {
                                plain_text: string;
                            }[];
                        };
                        Tags: { multi_select: { name: any; }[]; };
                        WorkPeriod: { date: { start: any; end: any; }; };
                        GitHub: { url: string; };
                        Contributor: {
                            number: number;
                        };
                    };
                }) => (
                    <div className={styles.project} key={project.id}>
                        <img src={`${project.cover.file.url}`} alt={`${project.properties.Name.title[0]?.plain_text}`}/>
                        <div className={styles.texts}>
                            <div className={styles.header}>
                                <h3>{project.properties.Name.title[0]?.plain_text}</h3>
                                <p>{project.properties.Contributor?.number}인 프로젝트</p>
                            </div>
                            <p>{project.properties.Description.rich_text[0]?.plain_text}
                            </p>
                            <div className={styles.tags}>
                                {
                                    project.properties.Tags.multi_select.map((tag: { name: any; }) => (
                                        <div className={styles.tag} key={tag.name}>{tag.name}</div>
                                    ))
                                }
                            </div>
                            <p>{project.properties.WorkPeriod.date.end ? `${project.properties.WorkPeriod.date.start} to ${project.properties.WorkPeriod.date.end}` : `${project.properties.WorkPeriod.date.start}`}</p>
                            <Link href={project.properties.GitHub.url}
                                  target={'_blank'}>{project.properties.GitHub.url}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
