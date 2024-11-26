import React, { useEffect, useState } from 'react'

const OurPolicies = () => {

    const [isTerms, setIsTerms] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='w-full min-h-screen relative pt-28 font-poppins'>
        <div className='w-[80%] mx-auto'>
            <h1 className='mt-5 text-3xl font-poppins font-bold text-white'>Our Policies</h1>
            <hr />
            <div className='w-[500px] h-[40px] bg-red-400 mt-5 grid grid-cols-2 rounded-r-full'>
                <div className={`w-full h-full flex items-center rounded-r-full cursor-pointer ${isTerms ? 'bg-red-500' : ''}`} onClick={() => setIsTerms(true)}>
                    <h1 className='font-poppins text-white ml-1'>Our Terms and Conditions</h1>
                </div>
                <div className={`w-full h-full flex items-center rounded-r-full cursor-pointer  ${!isTerms ? 'bg-red-500' : ''}`} onClick={() => setIsTerms(false)}>
                    <h1 className='font-poppins text-white ml-1'>Return and Exchange Policy</h1>
                </div>
            </div>
            {isTerms ? 
                <div className='w-full'>
                    <h1 className='text-xl text-white mt-5 font-semibold font-abhaya'>ඔබ මිලදී ගන්නා භාණ්ඩ සඳහා අප ලබා දෙන වගකීම් සහතිකය කොටස් තුනකට බෙදා ඇත</h1>
                    <h1 className='text-xl text-white font-semibold'>The warranty certificate we provide for the products you purchase is divided into three parts.</h1>
                    <ul className='my-4 ml-4 text-green-400 text-lg font-semibold'>
                        <li>• Company warranty</li>
                        <li>• Replacement warranty</li>
                        <li>• Repair warranty</li>
                    </ul>
                    <h2 className='text-xl text-green-400 font-semibold'>COMPANY WARRANTY</h2>
                    <p className='pl-2 text-white mt-3 font-abhaya text-xl'>• ඔබ විසින් මිලදී ගත් භාණ්ඩය හෝ සේවාව සඳහා අදාළ මව් සමාගම හෝ අනුමත අලෙවිනියෝජිතයා විසින් නියම කරන ලද වගකීම් කාලය, අප ආයතනය විසින් ඔබට ලබා දේ.</p>
                    <p className='pl-2 text-white mt-1 font-abhaya text-xl'>• වගකීම් කාලය තුළ, ඔබ විසින් මිලදී ගත් භාණ්ඩයකට ගැටලුවක් ඇතිවුවහොත්, අප ආයතනය එම භාණ්ඩය අදාල මව් සමාගමට හෝ බලය ලත් අලෙවිනියෝජිත ආයතනය වෙත යවා, ඔබගේ ගැටළුව නිරාකරණය කරනු ලබයි.</p>
                    <p className='pl-2 text-white mt-1 font-abhaya text-xl'>• අදාළ වගකීම් ලබා ගැනීම සඳහා වැඩ කරන දින 7ත් 30ත් අතර කාලයක් ගතවිය හැකි බව කරුණාවෙන් සලකන්න.</p>
                    <p className='pl-2 text-white mt-3'>• The warranty period for the product or service you have purchased, as determined by the relevant parent company or authorized dealer, will be provided to you by our organization.</p>
                    <p className='pl-2 text-white mt-1'>• During the warranty period, if there is any issue with the product you have purchased, our organization will forward the product to the relevant parent company or authorized dealer to resolve your issue.</p>
                    <p className='pl-2 text-white mt-1'>• Please note that it may take 7 to 30 working days to process the relevant warranty claim.</p>
                    <h2 className='text-xl text-green-400 font-semibold mt-5'>REPLACEMENT WARRANTY</h2>
                    <p className='pl-2 text-white mt-3 font-abhaya text-xl'>• වගකිම් කාලය තුළ, ඔබ විසින් මිලදී ගත් භාණ්ඩය හෝ සේවාවක් සම්බන්ධයෙන් කුමක් හෝ ගැටලුවක් ඇතිවුවහොත්, අප ආයතනය එම මොහොතේම නව භාණ්ඩයක් නිකුත් කිරීම සිදු කරනු ඇත. </p>
                    <p className='pl-2 text-white mt-1 font-abhaya text-xl'>• එමෙන්ම, ඔබට කිසිදු ප්‍රමාදයකින් තොරව වගකීම ලබා ගැනීමේ අවස්ථාව සැපයෙනු ඇත.</p>
                    <p className='pl-2 text-white mt-3'>• During the warranty period, if you encounter any issues with the product or service purchased, our organization will issue a replacement immediately.</p>
                    <p className='pl-2 text-white mt-1'>• Additionally, you will be provided the opportunity to receive the warranty service without any delay.</p>
                    <h2 className='text-xl text-green-400 font-semibold mt-5'>REPAIR WARRANTY</h2>
                    <p className='pl-2 text-white mt-3 font-abhaya text-xl'>• වගකිම් කාලය තුළ, ඔබ විසින් මිලදී ගත් භාණ්ඩය හෝ සේවාවක් සම්බන්ධයෙන් කුමක් හෝ ගැටලුවක් ඇතිවුවහොත්, අප ආයතනය එය නැවත අලුත්වැඩියා කරදෙනු ඇත. </p>
                    <p className='pl-2 text-white mt-1 font-abhaya text-xl'>• මෙම සේවාව සඳහා ඔබට කිසිදු මුදලක් ගෙවීමට සිදු නොවේ. වැඩ කරන දින 3 සිට 30 දක්වා කාලයක් ගතවිය හැකි බව කරුණාවෙන් සලකන්න.</p>
                    <p className='pl-2 text-white mt-3'>• During the warranty period, if you encounter any issues with the product or service purchased, our organization will repair it. </p>
                    <p className='pl-2 text-white mt-1'>• You will not be required to pay any fees for this service. Please note that the time taken for the service may range from 3 to 30 working days.</p>

                    <h2  className='text-2xl text-red-500 font-semibold mt-8 font-abhaya'>වගකීම් සේවාව ලබා ගැනීමේදී, වගකීම් අහිමිවීමට බලපාන හේතු</h2>
                    <ol className='ml-2 mt-2 list-decimal'>
                        <li className='pl-2 text-white mt-3 font-semibold font-abhaya text-xl'>භාණ්ඩය වැරදි ලෙස භාවිතා කිරීම හෝ නඩත්තු කිරීම:</li>
                        <p className='pl-5 text-white mt-1 font-abhaya text-lg'>• භාණ්ඩය නිසි නොවන පරිදි භාවිතා කිරීමෙන් හෝ නඩත්තු නොකිරීමෙන් ඇතිවන හානියට වගකීම අහිමි විය හැක.</p>
                        <li className='pl-2 text-white mt-3 font-semibold font-abhaya text-xl'>නිසි ප්‍රමිතීන්ට අනුකුල නොමැති ආකාරයෙන් සවි කිරීම:</li>
                        <p className='pl-5 text-white mt-1 font-abhaya text-lg'>• වගකීම් ප්‍රමාණයට අනුකුල නොවන ආකාරයෙන් සවි කිරීමෙන් සිදුවන හානියට වගකීම අහිමි විය හැක.</p>
                        <li className='pl-2 text-white mt-3 font-semibold font-abhaya text-xl'>භෞතික හා පරිසර හානි:</li>
                        <p className='pl-2 font-semibold text-white mt-1 font-abhaya text-xl'>පහත සඳහන් හේතුන් නිසා ඇතිවන හානියට වගකීම අහිමි විය හැක.</p>
                        <p className='pl-5 text-white mt-1 font-abhaya text-lg'>• පිටත කටුගැසිම්, ඇනීම්, හෝ ලක්ෂණමය කැඩීම්.</p>
                        <p className='pl-5 text-white mt-1 font-abhaya text-lg'>• මලකැම්, සතුන්ගේ හානීන්, හෝ ජලය හේතුවෙන් ඇතිවන හානි.</p>
                        <p className='pl-5 text-white mt-1 font-abhaya text-lg'>• ආහාර, පාන, හෝ වෙනත් ද්‍රව උතුරායාම.</p>
                        <p className='pl-5 text-white mt-1 font-abhaya text-lg'>• ස්වභාවික විපත් (උදාහරණයක් ලෙස ගංවතුර, ගිනිගැනිම්).</p>
                        <li className='pl-2 text-white mt-3 font-semibold font-abhaya text-xl'>වගකීම් ලේබලය (Warranty Sticker):</li>
                        <p className='pl-5 text-white mt-1 font-abhaya text-lg'>• වගකීම් ලේබලය විනාශ වී තිබේ නම් හෝ ඉවත් කර ඇත් නම්, වගකීම අහිමි විය හැක.</p>
                        <li className='pl-2 text-white mt-3 font-semibold font-abhaya text-xl'>වලංගු වගකීම් සහතිකය:</li>
                        <p className='pl-5 text-white mt-1 font-abhaya text-lg'>• වගකීම් සහතිකය ඉදිරිපත් නොකිරීමෙන් වගකීම අහිමි විය හැක.</p>
                    </ol>

                    <h2 className='text-xl text-red-500 font-semibold mt-8'>Reasons for Warranty Voidance When Claiming Warranty Services</h2>
                    <ol className='ml-2 mt-2 list-decimal mb-10'>
                        <li className='pl-2 text-white mt-3 font-semibold'>Improper Use or Maintenance:</li>
                        <p className='pl-5 text-white mt-1'>• Warranty may be void if the product is used incorrectly or not maintained properly.</p>
                        <li className='pl-2 text-white mt-3 font-semibold'>Non-Standard Installation:</li>
                        <p className='pl-5 text-white mt-1'>• Warranty may be void if damage occurs due to installation that does not meet the required standards.</p>
                        <li className='pl-2 text-white mt-3 font-semibold'>Physical and Environmental Damage:</li>
                        <p className='pl-2 font-semibold text-white mt-1'>Warranty may be void due to damage caused by the following:</p>
                        <p className='pl-5 text-white mt-1'>• External scratches, dents, or physical breakage.</p>
                        <p className='pl-5 text-white mt-1'>• Corrosion, pest-related damage, or damage caused by water.</p>
                        <p className='pl-5 text-white mt-1'>• Spills of food, beverages, or other liquids.</p>
                        <p className='pl-5 text-white mt-1'>• Natural disasters (e.g., floods, fires).</p>
                        <li className='pl-2 text-white mt-3 font-semibold'>Warranty Label (Sticker):</li>
                        <p className='pl-5 text-white mt-1'>• Warranty may be void if the warranty label is damaged or removed.</p>
                        <li className='pl-2 text-white mt-3 font-semibold'>Valid Warranty Certificate:</li>
                        <p className='pl-5 text-white mt-1'>• Warranty may be void if a valid warranty certificate is not presented.</p>
                    </ol>
                </div>
            : 
            <div className='w-full mb-10'>
                <h1 className='text-xl text-white mt-5 font-semibold font-abhaya'>අපගේ සමාගම, ඔබගේ සතුට සහ විශ්වාසය හිමිකර ගැනීමට හැම විටම කැපවී සිටියි. ඔබ Senex Computer Solutions වෙතින් මිලදී ගත් භාණ්ඩ හෝ සේවාවක් ගැන ඔබ සෑහීමකට නොපත්වේ නම්,පහත සඳහන් ප්‍රතිලාභ සහ මාරු කිරීමේ ප්‍රතිපත්තිය පිළිබඳව මගපෙන්වීම් ලබා ගන්න.</h1>
                <h1 className='text-xl text-white font-semibold mt-1 font-abhaya'>ආපසු භාරදීම, මාරු කිරීම හෝ මුදල් ආපසු ලබාදීය නොහැකි භාණ්ඩ හ සේවා</h1>
                <h1 className='text-xl text-white font-semibold mt-1 font-abhaya'>පහත සඳහන් භාණ්ඩ සහ සේවා සඳහා ආපසු භාරදීම, මාරු කිරීම හෝ මුදල් ආපසු ලබා දීම සිදු නොවේ:</h1>
                <ul className='my-4 ml-4 text-green-400 text-lg font-semibold'>
                    <li>• Computer cables</li>
                    <li>• Converter items</li>
                    <li className='font-abhaya text-xl'>• විශේෂ ඇනවුම් භාණ්ඩ (Special Order Items)</li>
                    <li>• Company seal සහිත භාණ්ඩ</li>
                    <li>• Software සහ Repair items</li>
                    <li className='font-abhaya text-xl'>• අලුත්වැඩියා සඳහා යොදාගත් භාණ්ඩ සහ අය කළ ගාස්තු (අලුත්වැඩියා, ස්ථාපන ගාස්තු සහ සොෆ්ට්වෙයාර් ස්ථාපන ගාස්තු).</li>
                </ul>
            
                <h2  className='text-2xl text-red-500 font-semibold mt-8 font-abhaya'>ප්‍රතිලාභ සහ මාරු කිරීමේ කොන්දේසි</h2>
                <ol className='ml-2 mt-2 list-decimal font-abhaya text-xl'>
                    <li className='pl-2 text-white mt-3 font-semibold'>කාලසීමාව:</li>
                    <p className='pl-5 text-white mt-1'>• භාණ්ඩය මිලදී ගත් දින සිට 2 දිනක් ඇතුළත ආපසු භාරදීම හෝ මාරු කිරීමේ ඉල්ලුම් කළ හැක.</p>
                    <p className='pl-5 text-white mt-1'>• 2 දින සීමාව ඉක්මවූ භාණ්ඩ ආපසු භාරගැනීම සඳහා සුදුසු නොවේ.</p>
                    <li className='pl-2 text-white mt-3 font-semibold'>භාණ්ඩයේ තත්ත්වය:</li>
                    <p className='pl-5 text-white mt-1'>• ආපසු භාරදෙන භාණ්ඩය මුල් තත්ත්වයෙන් (භාවිතා නොකළ, හානියක් නොමැති, සහ මුල් ඇසුරුම සහිතව) තිබිය යුතුය.</p>
                    <p className='pl-5 text-white mt-1'>• හානියට පත්, භාවිතා කළ, හෝ මුල් අංග නොමැති භාණ්ඩ ප්‍රතිලාභ සඳහා සුදුසු නොවේ.</p>
                    <li className='pl-2 text-white mt-3 font-semibold'>මුල් ඇසුරුම සහ ලේබල්:</li>
                    <p className='pl-2 text-white mt-1'>• ආපසු භාරදෙන භාණ්ඩය මුල් ඇසුරුම, ලේබල් සහ උපකරණ සියල්ල සමඟ තිබිය යුතුය.</p>
                    <li className='pl-2 text-white mt-3 font-semibold'>මුදල් ආපසු ලබා දීම:</li>
                    <p className='pl-5 text-white mt-1'>• ආපසු භාරගත් භාණ්ඩ සඳහා, ඒවායේ මුල් මිලට සමාන මුදල් වටිනාකමක් ලබා දේ.</p>
                    <p className='pl-5 text-white mt-1'>• ගෙවීම් 7 දිනක් ඇතුළත, චෙක් පතක් මගින් සිදු කෙරේ.</p>
                    <li className='pl-2 text-white mt-3 font-semibold'>මාරු කිරීම:</li>
                    <p className='pl-5 text-white mt-1'>• ආපසු භාරගත් භාණ්ඩ වල වටිනාකමට සමාන, වෙනත් භාණ්ඩ හෝ සේවාවක් ලබා ගැනීමේ හැකියාව ඇත.</p>
                    <li className='pl-2 text-white mt-3 font-semibold'>ඉල්ලුම් ක්‍රියාවලිය:</li>
                    <p className='pl-5 text-white mt-1'>• ආපසු භාරදීම සඳහා, Return Authorization (RA) අනුමැතිය ලබා ගැනීම අත්‍යවශ්‍ය වේ.</p>
                    <p className='pl-5 text-white mt-1'>• RA අනුමැතිය නොමැතිව ආපසු භාරගැනීම් පටිපාටියට නොගැනේ.</p>
                </ol>

                <h2 className='text-2xl text-green-500 font-semibold mt-8 font-abhaya'>අතිරේක තොරතුරු:</h2>
                <p className='pl-5 text-white mt-1 font-abhaya text-lg'>• අපගේ අරමුණ: සෑම විටම ඔබේ අවශ්‍යතාවට සාධාරණ, ඉක්මන්, සහ ගුණාත්මක විසඳුම් ලබාදීම.</p>
                <p className='pl-5 text-white mt-1 font-abhaya text-lg'>• ඔබගේ විශේෂ අවශ්‍යතා හෝ ප්‍රශ්න සඳහා අපගේ පාරිභෝගික සේවා කණ්ඩායම ඔබට උදව් කිරීමට සූදානම්!</p>
                
                <h1 className='text-xl text-green-400 mt-10 font-semibold'>Return and Exchange Policy</h1>
                <h1 className='text-xl text-white mt-3 font-semibold'>Our company is always dedicated to ensuring your satisfaction and trust. If you are not satisfied with a product or service purchased from Senex Computer Solutions, please refer to the following return and exchange policy guidelines.</h1>
                <h1 className='text-lg text-white font-semibold mt-1'>The following items and services cannot be returned, exchanged, or refunded:</h1>
                <ul className='my-4 ml-4 text-green-400 text-lg font-semibold'>
                    <li>• Computer cables</li>
                    <li>• Converter items</li>
                    <li>• Special order items</li>
                    <li>• Items with the company seal</li>
                    <li>• Software and repair items</li>
                    <li>• Items used for repairs and associated charges (repair fees, installation fees, and software installation charges).</li>
                </ul>
            
                <h2  className='text-xl text-red-500 font-semibold mt-8'>Conditions for Returns and Exchanges</h2>
                <ol className='ml-2 mt-2 list-decimal'>
                    <li className='pl-2 text-white mt-3 font-semibold'>Time Frame:</li>
                    <p className='pl-5 text-white mt-1'>• Requests for returns or exchanges must be made within 2 days of purchase.</p>
                    <p className='pl-5 text-white mt-1'>• Items exceeding the 2-day time limit will not be eligible for return or exchange.</p>
                    <li className='pl-2 text-white mt-3 font-semibold'>Item Condition:</li>
                    <p className='pl-5 text-white mt-1'>• Returned items must be in their original condition (unused, undamaged, and with original packaging intact).</p>
                    <p className='pl-5 text-white mt-1'>• Damaged, used, or incomplete items are not eligible for returns.</p>
                    <li className='pl-2 text-white mt-3 font-semibold'>Original Packaging and Labels:</li>
                    <p className='pl-2 font-semibold text-white mt-1'>Items must be returned with all original packaging, labels, and accessories.</p>
                    <li className='pl-2 text-white mt-3 font-semibold'>Refunds:</li>
                    <p className='pl-5 text-white mt-1'>• Returned items will be refunded with an equivalent monetary value based on the original price.</p>
                    <p className='pl-5 text-white mt-1'>• Refunds are processed via check within 7 days.</p>
                    <li className='pl-2 text-white mt-3 font-semibold'>Exchanges:</li>
                    <p className='pl-5 text-white mt-1'>• Items returned can be exchanged for other products or services of equivalent value.</p>
                    <li className='pl-2 text-white mt-3 font-semibold'>Request Process:</li>
                    <p className='pl-5 text-white mt-1'>• To process a return, Return Authorization (RA) approval must be obtained.</p>
                    <p className='pl-5 text-white mt-1'>• Returns without RA approval will not be accepted.</p>
                </ol>

                <h2 className='text-xl text-green-500 font-semibold mt-8'>Additional Information</h2>
                <p className='pl-5 text-white mt-1'>• Our Objective: To consistently provide fair, prompt, and high-quality solutions tailored to your needs.</p>
                <p className='pl-5 text-white mt-1'>• For any special requirements or questions, our customer service team is ready to assist you!</p>
            
            </div>
            }
        </div>
    </div>
  )
}

export default OurPolicies