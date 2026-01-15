import Link from "next/link";
import Image from "next/image";

export default function GNB() {
    return (
        <header className="fixed top-0 left-0 w-full h-[60px] bg-white border-b border-slate-200 z-50 flex items-center px-4 md:px-8">
            <div className="max-w-6xl mx-auto w-full flex items-center">
                <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
                    <div className="md:hidden">
                        <Image src="/logo.svg" alt="Do it!" width={71} height={40} />
                    </div>
                    <div className="hidden md:block">
                        <Image src="/logo_with_text.svg" alt="Do it!" width={151} height={40} />
                    </div>
                </Link>
            </div>
        </header>
    );
}