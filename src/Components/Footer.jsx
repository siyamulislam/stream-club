import { BsTelegram, BsFacebook, BsWhatsapp, BsYoutube } from 'react-icons/bs';
const Footer = () => {
    function openWhatsApp() {
        const phoneNumber = '01717338996';
        const text = 'Hello, let\'s chat in this group!'; // Replace with your desired message
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
        window.open(whatsappLink, '_blank');
    }
    function openTelegram() {
        const username = 'siyamul';
        const telegramLink = `https://t.me/${username}`;
        window.open(telegramLink, '_blank');
    }

    function openFacebook() {
        const usernameOrId = 'siyamul.cse';
        const facebookLink = `https://www.facebook.com/${usernameOrId}`;
        window.open(facebookLink, '_blank');
    }

    function openYouTube() {
        const channelId = 'siyamul_islam';
        const youtubeLink = `https://www.youtube.com/@${channelId}/featured`;
        window.open(youtubeLink, '_blank');
    }

    return (
        <div className="w-full bg-slate-200 text-sal px-10 lg:px-28 py-2  flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <p className="text-sm font-normal">Powered by Stream Club 2023 | <span> developed by <a href="http://siyamul.com" className='text-indigo-700'>siam</a></span></p> 

            </div>

            <div className="flex items-center space-x-4">
                <p className="text-sm font-semibold">Join now for free</p>
                <BsWhatsapp size={22} onClick={openWhatsApp} />
                <BsTelegram size={22} onClick={openTelegram} />
                <BsFacebook size={22} onClick={openFacebook} />
                <BsYoutube size={22} onClick={openYouTube} /> 
            </div>
        </div>
    )
}

export default Footer