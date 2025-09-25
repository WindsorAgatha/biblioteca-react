function BlurBg({ children, blurBg }) {
    return (
        <div className={`h-auto min-h-[calc(100vh-180px)] transition-all duration-100 ${blurBg ? 'blur-sm bg-black/40 pointer-events-none' : ''}`}>
            {children}
        </div>
    )
}

export default BlurBg
