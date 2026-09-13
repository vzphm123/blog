'use client'

import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/lib/blogPosts'
import { GithubLogo, TwitterLogo } from 'phosphor-react'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.avatar}>
            <img 
              src="/avatar.png" 
              alt="Profile Avatar"
            />
          </div>
          <div className={styles.heroText}>
            <h1>welcome to  my blof =333</h1>
            <p>
              im smaller dev , u can sp me here papal.me/suhmydih!
            </p>
            <div className={styles.socialLinks}>
              <a href="https://github.com/isogay" target="_blank" rel="noopener noreferrer">
                <GithubLogo size={32} weight="fill" />
              </a>
              <a href="https://x.com/404" target="_blank" rel="noopener noreferrer">
                <TwitterLogo size={32} weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.postsSection}>
        <h2>Recent Posts</h2>
        {blogPosts.length === 0 ? (
          <p className={styles.emptyState}>No posts yet :/</p>
        ) : (
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
