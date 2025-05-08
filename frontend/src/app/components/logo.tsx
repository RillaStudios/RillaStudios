import Image from "next/image";
import Link from "next/link";

export default function RillaLogo({width, height}: {width?: number, height?: number}) {

    return (
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
                src="/static/images/RillaStudios_Black.png"
                alt="Logo"
                width={width || 125}
                height={height || 40}
                style={{ objectFit: 'contain' }}
                priority
            />
        </Link>
    )
}