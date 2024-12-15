export default function Sidebar(props){
    const{handleShowModo}=props
    return(
        <div className="sidebar">
            <div onClick={handleShowModo} className="bgOverlay"></div>
            <div className="sidebarContents">
            <h2>A Mesmerizing Nightscape: Witnessing the Splendor of the Milky Way Galaxy</h2>
            <div>
                <p className="description-p">Description :</p>
                <p className="description-para">This image captures the breathtaking beauty of the Milky Way galaxy as it stretches across the night sky, visible over a serene mountain landscape.
                     The cosmic glow of countless stars, set against the deep blue of space, creates an awe-inspiring view.
                    a tranquil scene of silhouetted mountains and faint urban lights, emphasizing the contrast between the earthly and the celestial. Such moments of 
                    stargazing are best experienced in areas with minimal light pollution, allowing for an unobstructed view of the galaxy's grandeur. Events like these 
                    remind us of our place in the universe and the beauty of cosmic exploration.</p>
            </div>
            <button onClick={handleShowModo} className="sideBar-btn">
            <i className="fa-solid fa-right-long"></i>
            </button>
            </div> 
        </div>
    )
}