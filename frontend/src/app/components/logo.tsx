import { useComputedColorScheme } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RillaLogo({width, height, size}: {width?: number, height?: number, size?: number}) {
    
    // Track component mounting state
    const [mounted, setMounted] = useState(false);
    const computedColorScheme = useComputedColorScheme('light');
    
    // Only apply color scheme after client-side hydration
    useEffect(() => {
        setMounted(true);
    }, []);
    
    // If width/height and size are both provided, throw an error
    if ((width !== undefined || height !== undefined) && size !== undefined) {
        throw new Error('Either provide width/height OR size, but not both');
    }

    // Always use light theme for initial render to match server
    const logoSrc = mounted && computedColorScheme === 'dark' 
        ? '/static/images/RillaStudios_White.png' 
        : '/static/images/RillaStudios_Black.png';

    return (
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
                src={logoSrc}
                alt="Rilla Studios Logo"
                width={width || size || 120}
                height={height || size || 35}
                style={{ objectFit: 'contain' }}
                priority
            />
        </Link>
    )
}