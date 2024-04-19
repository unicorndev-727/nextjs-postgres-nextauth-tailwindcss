'use client'
import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }

    return createPortal(
        <div className="modal-backdrop">
            <dialog ref={dialogRef} className="bg-white w-[60%] rounded shadow-lg p-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50" onClose={onDismiss}>
                <div className="flex justify-between items-center mb-4 relative">
                    {children}
                    <button onClick={onDismiss} className="text-gray-600 hover:text-gray-800 focus:outline-none absolute -top-1 -right-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </dialog>
        </div>,
        document.getElementById('modal-root')!
    );
}