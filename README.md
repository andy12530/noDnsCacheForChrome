noDnsCacheForChrome
===================

the Repo will edit the chrome resources file, clear all of cache every 500ms.


1. First SVN checkout http://grit-i18n.googlecode.com/svn/trunk, update the <code>grit-i18n\grit\format\data_pack.py</code>

2. Read the ReadDataPack function in data_pack.py, at (75-90).

3. copy the resources.pak file from chrome install Dir to   <code>grit-i18n\grit\format\\*</code>, change name "test.pak".

4. Run the <code>python data_pack.py test.pak</code>, the <code>new dir</code> you will find a ***.bin, It's a package file,
    MayBe is a png file, maybe a js or css file, edit it! (I recommend use the nodepad++, notice the file length, must be same to old file)

5. Run prev step again, you will get a new resources.pak file, move the chrome install dir.

6. May Be you need the Chrome extensions noHostsCacheChrome.

以下是中文内容

要注意grit-i18n\grit\format\data_pack.py文件中的代码及注释，修改后要保证和修改前文件长度是一致。如果你只是需要不缓存，那直接项目目录下的
resourcs.pak文件（适用于Chrome 229.0.1530.2, 其它版本我没测试过， 如果不行，你就自己编译一个）

Chrome扩展之前试过一个DNS-Flusher， 不好使，所以直接就在上面改了。基本上图标是用原作者的，剩下的代码都改掉了（总共JS代码才10行，嗯哼~~）


### Thanks:
[@swaydeng](https://github.com/swaydeng/DNS-Flusher)

[@上善若水](http://blog.csdn.net/jokers_i/article/details/8802352)

[StackOverFlow](http://stackoverflow.com/a/15039170)

### License
I Love [MIT](http://zh.wikipedia.org/zh/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)，有啥问题找我  [@andy12530](http://twitter.com/andy12530 "Twitter")，或者直接Gmail我。