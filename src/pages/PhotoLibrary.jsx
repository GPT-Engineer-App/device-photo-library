import React, { useState } from "react";
import { Modal, ModalContent, ModalTrigger } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const samplePhotos = [
  { id: 1, src: "/placeholder.svg", category: "Nature" },
  { id: 2, src: "/placeholder.svg", category: "Urban" },
  { id: 3, src: "/placeholder.svg", category: "People" },
  { id: 4, src: "/placeholder.svg", category: "Animals" },
];

const categories = ["Nature", "Urban", "People", "Animals"];

const PhotoLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [photos, setPhotos] = useState(samplePhotos);

  const filterPhotos = (category) => {
    setSelectedCategory(category);
  };

  const assignCategory = (photoId, category) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === photoId ? { ...photo, category } : photo
      )
    );
  };

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Photo Library</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Filter by Category</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => filterPhotos("All")}>
              All
            </DropdownMenuItem>
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => filterPhotos(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <Card key={photo.id} className="relative">
            <Modal>
              <ModalTrigger asChild>
                <img
                  src={photo.src}
                  alt="placeholder"
                  className="mx-auto object-cover w-full h-[200px] cursor-pointer"
                />
              </ModalTrigger>
              <ModalContent>
                <img
                  src={photo.src}
                  alt="placeholder"
                  className="mx-auto object-cover w-full h-[400px]"
                />
              </ModalContent>
            </Modal>
            <CardHeader>
              <CardTitle>{photo.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Assign Category
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => assignCategory(photo.id, category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhotoLibrary;