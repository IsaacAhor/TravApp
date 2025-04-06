import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface DestinationCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ title, description, imageSrc, link }) => {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
      <div className="relative w-full h-48 mb-4">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>
      <Link href={link}>
        <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 text-lg">
          Plan a Trip to {title}
        </Button>
      </Link>
    </div>
  );
};

export default DestinationCard;
