import { PicsumImage } from "@/types/image";
import { Card } from "@/components/ui/card";

interface ImageCardProps {
  image: PicsumImage;
  onClick: () => void;
}

export const ImageCard = ({ image, onClick }: ImageCardProps) => {
  const thumbnailUrl = `https://picsum.photos/id/${image.id}/400/400`;

  return (
    <Card
      className="group cursor-pointer overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={thumbnailUrl}
          alt={`Photo by ${image.author}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-overlay-foreground text-sm font-medium truncate">
              {image.author}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
