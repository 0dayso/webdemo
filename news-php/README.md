### �ֻ��ٶ�����PHP+MYSQL��̨
#####ע��mysql�ű��ļ���SQL�ļ�������ݿ���Ϊ��news����user���ݱ�Ϊ�û���¼��Ϣ��news���ݱ�Ϊ������Ϣ����

1.������HTML��PHP�������ַ�����(charset=UTF-8)������Conent-type��content=text/html����
�ַ����룺������utf-7 XSS��������Conent-type��������Json��XSS�����⡣

2.��addnews.php��upadte.php����PHP htmlspecialchars() �����������Ԥ������ַ�ת��Ϊ HTML ʵ�塣
$category =addslashes(htmlspecialchars($_POST['category']));//�������
$title = addslashes(htmlspecialchars($_POST['title']));//����
$pic = addslashes(htmlspecialchars($_POST['pic']));//ͼƬ��ַ
$time = htmlspecialchars($_POST['time']);//ʱ��
�������������Ƿ�ֹ�û�������������ݻ��߱༭������������ʱ����Ԥ������ַ��� ��< �� >��������������� HTML Ԫ�أ����ڷ�ֹ�������зǳ����ã���ֹxssע�룩��

3.��register.php��login.php��ʹ��md5()�������û�������ܡ�
$password = md5(addslashes(htmlspecialchars($_POST['password'])));

4.ʹ��session��¼��½״̬

5.ʹ��Token����CSRF����
session_start();
$token = md5(uniqid(rand(), TRUE));
$_SESSION['token'] = $token;

<input type="hidden" name="token" value="<?php echo $token; ?>" class="form-control" >

if ($_POST['token'] == $_SESSION['token']) {
//��ӵ����ݿ�
}
