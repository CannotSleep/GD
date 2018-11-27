using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Temp.Core.Util
{
    public class CheckCode
    {
        public CheckCode() { }

        /// <summary>
        /// 生成验证码图片
        /// </summary>
        /// <param name="count">多少位</param>
        /// <param name=""></param>
        /// <param name="code">返回值</param>
        /// <returns></returns>
        public MemoryStream GetCodeImg(int count, out string code)
        {
            code = CreateCode(count);
            using (Bitmap bmg = CreatePicture(count, code))
            {
                MemoryStream ms = new MemoryStream();
                bmg.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
                return ms;
            }
        }
        /// <summary>
        /// 生成验证码图片
        /// </summary>
        /// <param name="count"></param>
        /// <param name="code"></param>
        /// <param name="filepatch">保存路径(包括文件名)</param>
        /// <returns></returns>
        public void GetCodeImg(int count, out string code, string filepatch)
        {
            code = CreateCode(count);
            using (Bitmap bmg = CreatePicture(count, code))
            {
                bmg.Save(filepatch, System.Drawing.Imaging.ImageFormat.Jpeg);
            }
        }
        public string CreateCode(int count)
        {
            string AllChar = "1,2,3,4,5,6,7,8,9,0,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y,Z";
            string[] StrChar = AllChar.Split(',');
            Random rd = new Random();
            string Codes = "";
            for (int i = 0; i < count; i++)
            {
                Codes += StrChar[rd.Next(0, 35)];
            }
            return Codes;
        }
        public virtual Bitmap CreatePicture(int count, string code)
        {
            Bitmap bmg = new Bitmap(count * 17, 25);
            using (Graphics g = Graphics.FromImage(bmg))
            {
                Font f = new Font("Arial", 14);
                Brush b = new SolidBrush(Color.Black);
                Brush r = new SolidBrush(Color.Red);
                g.Clear(System.Drawing.ColorTranslator.FromHtml("#99C1CB"));

                char[] ch = code.ToCharArray();
                for (int i = 0; i < ch.Length; ++i)
                {
                    if (ch[i] >= '0' && ch[i] <= '9')
                    {
                        //数字用红色显示 
                        g.DrawString(ch[i].ToString(), f, r, 3 + (i * 14), 3);//
                    }
                    else
                    {   //字母用黑色显示
                        g.DrawString(ch[i].ToString(), f, b, 3 + (i * 14), 3);
                    }
                }

                Pen pen = new Pen(Color.Black, 0);
                Random rand = new Random();
                for (int i = 0; i < 5; ++i)
                {
                    int y = rand.Next(bmg.Height);
                    g.DrawLine(pen, 0, y, bmg.Width, y);
                }
            }
            return bmg;
        }
    }
}
