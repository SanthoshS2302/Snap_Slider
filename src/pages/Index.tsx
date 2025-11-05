import { ImageGallery } from "@/components/ImageGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">Image Gallery</h1>
          <p className="text-muted-foreground mt-2">
            Beautiful images from Picsum Photos
          </p>
        </div>
      </header>
      
      <main>
        <ImageGallery />
      </main>
    </div>
  );
};

export default Index;
