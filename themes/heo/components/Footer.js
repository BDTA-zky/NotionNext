import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center mx-auto w-full max-w-full leading-6 text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 */}
      <div className='w-full h-24 flex justify-center'>
        <SocialButton />
      </div>

      <br />

      {/* 石头墙和动物的叠加图片 */}
      <div id="footer-image" className="w-full h-36 max-w-screen-lg mx-auto relative">
        {/* 石头墙图片，位于底部 */}
        <img 
          src="https://pic.imgdb.cn/item/67145b87d29ded1a8ce5f02a.png" 
          alt="Footer Stone Wall" 
          className="w-full object-contain"
        />

        {/* 动物图片，位于石头墙之上 */}
        <img 
          src="https://pic.imgdb.cn/item/6713caf1d29ded1a8c05a59b.webp" 
          alt="Footer Animals" 
          className="absolute top-[-40px] left-0 w-full h-full object-contain z-10"
        />
      </div>

      {/* 底部页面信息 */}
      <div
        id='footer-bottom'
        className='w-full flex flex-col lg:flex-row flex-wrap p-3 justify-between items-center px-6 bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F] max-w-screen-lg mx-auto'>
        <div id='footer-bottom-left' className='text-center lg:text-left'>
          NotionNext {siteConfig('VERSION')} <i className='fas fa-copyright' />{' '}
          {`${copyrightDate}`} <i className='mx-1 animate-pulse fas fa-heart' />{' '}
          <a
            href={siteConfig('LINK')}
            className='underline font-bold dark:text-gray-300 '>
            {siteConfig('AUTHOR')}
          </a>
          .
        </div>

        <div id='footer-bottom-right' className='text-center lg:text-right'>
          {siteConfig('BEI_AN') && (
            <>
              <i className='fas fa-shield-alt' />{' '}
              <a href='https://beian.miit.gov.cn/' className='mr-2'>
                {siteConfig('BEI_AN')}
              </a>
            </>
          )}

          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye' />
            <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users' />{' '}
            <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
