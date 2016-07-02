<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Article;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DefaultController extends Controller
{
    /**
     * @Route("/article/{id}", name="article_get")
     * @Method({"GET"})
     */
    public function articleGetAction($id, Request $request)
    {
        // @TODO use a param convertor rather than doing this in the controller.
        try {
            $article = $this->get('app.storage.article')->get($id);
        } catch (\Exception $e) {
            throw new NotFoundHttpException($e->getMessage());
        }
        // End @TODO

        // Message the data.
        $this->messageData(34);

        return $this->json($article);
    }

    /**
     * @Route("/article/{id}", name="article_update")
     * @Method({"PUT"})
     */
    public function articleUpdateAction($id, Request $request)
    {
        // @TODO use a param convertor rather than doing this in the controller.
        $data = $request->getContent();
        if (empty($data)) {
            throw new BadRequestHttpException('No Content Sent.');
        }

        $data = json_decode($data);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new BadRequestHttpException('Error reading data.');
        }

        if (!isset($data->text)) {
            throw new BadRequestHttpException('Malformed Request. Missing text.');
        }

        try {
            $article = $this->get('app.storage.article')->get($id);
        } catch (\Exception $e) {
            throw new NotFoundHttpException($e->getMessage());
        }

        $article = new Article($article->getId(), $data->text);
        // End @TODO

        $this->get('app.storage.article')->save($article);

        // Message the data.
        $this->messageData(34);

        return $this->json($article);
    }

    /**
     * Message the Data.
     *
     * @param int $n
     *   Number to message data by.
     *
     * @return int
     *   Fibinici number corrosponding to number of times messaged.
     */
    protected function messageData($n)
    {
        if ($n == 1 || $n == 2) {
            return 1;
        } else {
            return $this->messageData($n - 1) + $this->messageData($n - 2);
        }
    }
}
