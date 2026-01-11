'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface CloudinaryImage {
    publicId: string;
    url: string;
    secureUrl: string;
    width: number;
    height: number;
    format: string;
    folder: string;
    category: string;
}

interface ImageCacheContextType {
    images: CloudinaryImage[];
    setImages: (images: CloudinaryImage[]) => void;
    isLoaded: boolean;
    setIsLoaded: (loaded: boolean) => void;
    priorityImagesLoaded: boolean;
    setPriorityImagesLoaded: (loaded: boolean) => void;
}

const ImageCacheContext = createContext<ImageCacheContextType | undefined>(undefined);

export function ImageCacheProvider({ children }: { children: ReactNode }) {
    const [images, setImages] = useState<CloudinaryImage[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [priorityImagesLoaded, setPriorityImagesLoaded] = useState(false);

    return (
        <ImageCacheContext.Provider
            value={{
                images,
                setImages,
                isLoaded,
                setIsLoaded,
                priorityImagesLoaded,
                setPriorityImagesLoaded,
            }}
        >
            {children}
        </ImageCacheContext.Provider>
    );
}

export function useImageCache() {
    const context = useContext(ImageCacheContext);
    if (context === undefined) {
        throw new Error('useImageCache must be used within an ImageCacheProvider');
    }
    return context;
}
