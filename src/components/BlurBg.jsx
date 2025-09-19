

function BlurBg({ children, blurBg }) {
    return (
        <div className={`h-auto min-h-[calc(100vh-180px)] ${blurBg ? 'blur-sm' : ''}`}>
            {children}
        </div>
    )
}

export default BlurBg
