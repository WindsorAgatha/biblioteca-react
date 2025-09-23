function BlurBg({ children, blurBg }) {
    return (
        <div className={`h-auto min-h-[calc(100vh-180px)] z-10 transition-all duration-100 ${blurBg ? 'blur-sm bg-black/40' : ''}`}>
            {children}
        </div>
    )
}

export default BlurBg
