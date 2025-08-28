import BlogHeader from "./BlogHeader";
import BlogHero from "./BlogHero";
import BlogSection from "./BlogSection";
import BlogCategories from "./BlogCategories";
import BlogAbout from "./BlogAbout";
import BlogFooter from "./BlogFooter";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <BlogHero />
        <BlogCategories />
        <BlogSection />
        <BlogAbout />
      </main>
      <BlogFooter />
    </div>
  );
};

export default BlogPage;