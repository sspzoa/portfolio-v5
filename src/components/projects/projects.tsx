'use client'

import React, {useEffect, useState} from 'react';
import styles from '@/components/projects/projects.module.css';
import {Client} from '@notionhq/client';
import dotenv from 'dotenv';
import {PageObjectResponse} from "@notionhq/client/build/src/api-endpoints";

interface Project {
    id: string;
    title: string;
}

export default function Projects() {
    dotenv.config();
    const [projects, setProjects] = useState<Project[]>([]); // Use the Project interface

    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    async function getDatabaseData(databaseId: string) {
        const response = await notion.databases.query({database_id: databaseId});

        function isPageObjectResponse(page: any): page is PageObjectResponse {
            return page.object === 'page' && page.properties != null;
        }

        const projects = response.results
            .filter(isPageObjectResponse) // Use the type guard here
            .map((page) => {
                const titleProperty = page.properties['YourTitlePropertyName'];

                const title = titleProperty && titleProperty.type === 'rich_text' && titleProperty.rich_text.length > 0
                    ? titleProperty.rich_text[0].plain_text
                    : 'Unnamed Project';

                return {
                    id: page.id,
                    title: title,
                };
            });

        return projects;
    }

    async function fetchProjects() {
        const databaseId = 'fbfc345880a84d3e9d16d9698809689d';
        const data = await getDatabaseData(databaseId);
        console.log('데이터베이스 데이터:', data);
        setProjects(data);
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        {project.title || 'Unnamed Project'}
                    </li>
                ))}
            </ul>
        </div>
    );
}
