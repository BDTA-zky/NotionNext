import SocialButton from './SocialButton'
import { siteConfig } from '@/lib/config'

// 图片的外部链接
const animalImagePath = 'https://pic.imgdb.cn/item/6713caf1d29ded1a8c05a59b.webp'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer
      className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm'
    >

      {/* 颜色过渡区 */}
      <div id='color-transition' className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'>
      </div>

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      {/* 动物图片区域，使用外部链接 */}
      <div id="footer-image" className='relative flex justify-center'>
        <img
          src={animalImagePath}  // 使用外部链接
          alt='Footer Animals'
          className='absolute w-full max-w-[600px] object-contain -bottom-12 z-10'  // 修改 -bottom-8 为 -bottom-12
        />
      </div>

      {/* 底部页面信息 */}
      <div id='footer-bottom' className='w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-gradient-to-r from-pink-500 to-red-500 dark:bg-[#30343f]'>

        <div id='footer-bottom-left'>
          NotionNext {siteConfig('VERSION')} <i className='fas fa-copyright' /> {`${copyrightDate}`} <i className='mx-1 animate-pulse fas fa-heart' /> <a href={siteConfig('LINK')} className='underline font-bold dark:text-gray-300'>{siteConfig('AUTHOR')}</a>.
        </div>

        <div id='footer-bottom-right'>
          {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{siteConfig('BEI_AN')}</a></>}

          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span>
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
