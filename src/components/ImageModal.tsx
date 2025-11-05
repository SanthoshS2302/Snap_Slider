import { useEffect } from "react";
import { PicsumImage } from "@/types/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageModalProps {
  image: PicsumImage;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const ImageModal = ({
  image,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: ImageModalProps) => {
  const fullImageUrl = `https://picsum.photos/id/${image.id}/1200/800`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && hasPrevious) {
        onPrevious();
      } else if (e.key === "ArrowRight" && hasNext) {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onPrevious, onNext, hasPrevious, hasNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/95 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-overlay-foreground hover:bg-overlay-foreground/10 z-10"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      {hasPrevious && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 text-overlay-foreground hover:bg-overlay-foreground/10 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      )}

      {hasNext && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 text-overlay-foreground hover:bg-overlay-foreground/10 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      )}

      <div
        className="relative max-w-7xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={fullImageUrl}
          alt={`Photo by ${image.author}`}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
          <p className="text-overlay-foreground text-lg font-semibold">
            Photo by {image.author}
          </p>
          <p className="text-overlay-foreground/80 text-sm mt-1">
            {image.width} × {image.height}
          </p>
        </div>
      </div>
    </div>
  );
};
